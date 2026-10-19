import { NextResponse } from "next/server";
import { readDatabase, writeDatabase } from "@/lib/db";
import { ConsultationRequest } from "@/types";

export async function GET(request: Request) {
  try {
    const db = readDatabase();
    return NextResponse.json({
      success: true,
      total: db.consultations.length,
      data: db.consultations,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Murojaatlarni yuklashda xatolik" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Ism va telefon kiritilishi shart" },
        { status: 400 }
      );
    }

    const db = readDatabase();
    const newRequest: ConsultationRequest = {
      id: `con-${Date.now().toString().slice(-6)}`,
      name: body.name,
      phone: body.phone,
      category: body.category,
      budget: body.budget,
      subject: body.subject || "Noutbuk tanlashda yordam",
      message: body.message || "",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    db.consultations.unshift(newRequest);
    writeDatabase(db);

    return NextResponse.json(
      {
        success: true,
        message: "So'rovingiz qabul qilindi. Tez orada mutaxassisimiz bog'lanadi!",
        requestId: newRequest.id,
        data: newRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Murojaatni saqlashda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
