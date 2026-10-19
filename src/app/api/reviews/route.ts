import { NextResponse } from "next/server";
import { readDatabase, writeDatabase } from "@/lib/db";
import { Review } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const rating = searchParams.get("rating");

    const db = readDatabase();
    let reviews = [...db.reviews];

    if (rating && rating !== "all") {
      reviews = reviews.filter((r) => r.rating === Number(rating));
    }

    return NextResponse.json({
      success: true,
      total: reviews.length,
      data: reviews,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Sharhlarni yuklashda xatolik" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.comment) {
      return NextResponse.json(
        { success: false, error: "Ism va fikr matni majburiy" },
        { status: 400 }
      );
    }

    const db = readDatabase();
    const newReview: Review = {
      id: `rev-${Date.now().toString().slice(-6)}`,
      name: body.name,
      role: body.role || "Xaridor",
      avatar:
        body.avatar ||
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      rating: body.rating ? Number(body.rating) : 5,
      comment: body.comment,
      laptopBought: body.laptopBought || "Noutbuk",
      createdAt: new Date().toISOString(),
    };

    db.reviews.unshift(newReview);
    writeDatabase(db);

    return NextResponse.json(
      {
        success: true,
        message: "Fikringiz muvaffaqiyatli saqlandi!",
        data: newReview,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Fikrni saqlashda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
