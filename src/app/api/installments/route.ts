import { NextResponse } from "next/server";
import { readDatabase, writeDatabase } from "@/lib/db";
import { InstallmentApplication } from "@/types";

export async function GET(request: Request) {
  try {
    const db = readDatabase();
    return NextResponse.json({
      success: true,
      total: db.installments.length,
      data: db.installments,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Nasiya arizalarini yuklashda xatolik" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Ism va telefon raqami majburiy" },
        { status: 400 }
      );
    }

    const db = readDatabase();
    const amount = Number(body.amount || 1200);
    const months = Number(body.months || 12);
    const initialPayment = Number(body.initialPayment || 0);
    const monthlyPayment = Math.round((amount - initialPayment) / months);

    const newApplication: InstallmentApplication = {
      id: `ins-${Date.now().toString().slice(-6)}`,
      customerName: body.name,
      phone: body.phone,
      provider: body.selectedPartner || body.provider || "Uzum Nasiya",
      laptopId: body.laptopId,
      laptopTitle: body.laptopTitle,
      amount,
      months,
      initialPayment,
      monthlyPayment,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    db.installments.unshift(newApplication);
    writeDatabase(db);

    return NextResponse.json(
      {
        success: true,
        message: "Muddatli to'lov arizasi muvaffaqiyatli qabul qilindi!",
        applicationId: newApplication.id,
        data: newApplication,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Arizani qabul qilishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
