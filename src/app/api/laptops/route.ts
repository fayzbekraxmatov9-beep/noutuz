import { NextResponse } from "next/server";
import { readDatabase, writeDatabase } from "@/lib/db";
import { Laptop } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    const q = searchParams.get("q")?.toLowerCase();
    const sort = searchParams.get("sort");

    const db = readDatabase();
    let laptops = [...db.laptops];

    if (category && category !== "all") {
      laptops = laptops.filter((item) => item.category === category);
    }

    if (brand && brand !== "Barchasi") {
      laptops = laptops.filter(
        (item) => item.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    if (q) {
      laptops = laptops.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.brand.toLowerCase().includes(q) ||
          item.specs.cpu.toLowerCase().includes(q) ||
          item.specs.gpu.toLowerCase().includes(q)
      );
    }

    if (sort === "price-asc") {
      laptops.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      laptops.sort((a, b) => b.price - a.price);
    } else {
      laptops.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    return NextResponse.json({
      success: true,
      total: laptops.length,
      data: laptops,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Noutbuklar ma'lumotlarini yuklashda xatolik" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.brand || !body.price) {
      return NextResponse.json(
        { success: false, error: "Noutbuk nomi, brendi va narxi majburiy" },
        { status: 400 }
      );
    }

    const db = readDatabase();
    const newLaptop: Laptop = {
      id: body.id || `lap-${Date.now()}`,
      title: body.title,
      brand: body.brand,
      category: body.category || "office",
      price: Number(body.price),
      oldPrice: body.oldPrice ? Number(body.oldPrice) : undefined,
      rating: body.rating ? Number(body.rating) : 5.0,
      reviewsCount: body.reviewsCount ? Number(body.reviewsCount) : 0,
      badge: body.badge || "Yangi",
      image: body.image || "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      inStock: body.inStock !== undefined ? Boolean(body.inStock) : true,
      isPopular: Boolean(body.isPopular),
      isNewArrival: Boolean(body.isNewArrival),
      specs: {
        cpu: body.specs?.cpu || "Intel Core i5 / AMD Ryzen 5",
        ram: body.specs?.ram || "16 GB",
        storage: body.specs?.storage || "512 GB SSD",
        gpu: body.specs?.gpu || "Integrated Graphics",
        display: body.specs?.display || "15.6\" FHD",
        battery: body.specs?.battery || "8 soatgacha",
        weight: body.specs?.weight || "1.8 kg",
      },
    };

    db.laptops.unshift(newLaptop);
    writeDatabase(db);

    return NextResponse.json(
      { success: true, message: "Noutbuk muvaffaqiyatli qo'shildi", data: newLaptop },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Noutbuk qo'shishda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
