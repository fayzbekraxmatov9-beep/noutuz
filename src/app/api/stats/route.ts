import { NextResponse } from "next/server";
import { readDatabase } from "@/lib/db";

export async function GET() {
  try {
    const db = readDatabase();

    const totalRevenue = db.orders.reduce((sum, ord) => sum + ord.totalPrice, 0);

    return NextResponse.json({
      success: true,
      data: {
        totalLaptops: db.laptops.length,
        totalOrders: db.orders.length,
        totalInstallments: db.installments.length,
        totalConsultations: db.consultations.length,
        totalReviews: db.reviews.length,
        totalRevenue,
        recentOrders: db.orders.slice(0, 5),
        recentInstallments: db.installments.slice(0, 5),
        recentConsultations: db.consultations.slice(0, 5),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Statistika ma'lumotlarini olishda xatolik" },
      { status: 500 }
    );
  }
}
