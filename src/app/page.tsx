'use client';

import { RegisterForm } from "@/components/RegisterForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/registrarse");
  }, []);
  return null;
}
