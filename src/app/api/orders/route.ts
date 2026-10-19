import { NextResponse } from "next/server";
import { readDatabase, writeDatabase } from "@/lib/db";
import { Order } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const db = readDatabase();
    let orders = [...db.orders];

    if (status) {
      orders = orders.filter((o) => o.status === status);
    }

    return NextResponse.json({
      success: true,
      total: orders.length,
      data: orders,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Buyurtmalarni yuklashda xatolik" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.address || !body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Ism, telefon, manzil va mahsulotlar kiritilishi shart" },
        { status: 400 }
      );
    }

    const db = readDatabase();

    const orderItems = body.items.map((item: any) => ({
      laptopId: item.laptop?.id || item.laptopId,
      laptopTitle: item.laptop?.title || item.laptopTitle || "Noutbuk",
      price: Number(item.laptop?.price || item.price),
      quantity: Number(item.quantity || 1),
    }));

    const totalPrice = orderItems.reduce(
      (sum: number, it: any) => sum + it.price * it.quantity,
      0
    );

    const newOrder: Order = {
      id: `ord-${Date.now().toString().slice(-6)}`,
      customerName: body.name,
      phone: body.phone,
      address: body.address,
      paymentType: body.paymentType || "payme",
      items: orderItems,
      totalPrice,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    db.orders.unshift(newOrder);
    writeDatabase(db);

    return NextResponse.json(
      {
        success: true,
        message: "Buyurtmangiz muvaffaqiyatli qabul qilindi!",
        orderId: newOrder.id,
        data: newOrder,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Buyurtmani saqlashda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
