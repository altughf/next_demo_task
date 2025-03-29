"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    if (!userId || !password) {
      setError("Lütfen kullanıcı adı ve şifre giriniz!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://api.tripkolic.com/api/v1/task/login", {
        userId,
        password,
      });

      if (response.data.status) {
        router.push("/profile");
      } else {
        setError("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (_) {
      setError("Sunucuya bağlanırken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 bg-neutral-200">
      <div className="flex flex-col w-96 border rounded-xl pt-2 bg-neutral-100 justify-center items-center">
        <div className="mt-8">
          <Image src="/rca_logo.png" alt="Login Görseli" width={240} height={240} className="mt-4" />
        </div>

        <h1 className="mt-16 font-bold text-orange-600">LOGIN</h1>

        <div className="flex items-start flex-col gap-4">
          <div className="relative mt-4 items-center flex bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute left-2 text-gray-500 w-6 h-6 fill-neutral-500"
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>

            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full pl-10 py-3 pr-3 shadow-lg border text-neutral-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>

          <div className="relative items-center flex bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute left-2 text-gray-500 w-6 h-6 fill-neutral-500"
            >
              <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
            </svg>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 py-3 shadow-lg pr-3 border text-neutral-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Link href="/forgot-password" className="text-blue-500 mt-3 text-center hover:underline">
            Forget Password?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-64 p-3 mt-5 font-bold text-white rounded-lg duration-300 transition ${
            loading ? "bg-gray-400" : "bg-orange-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Giriş Yapılıyor..." : "Log In"}
        </button>

        <div className="flex flex-col rounded-2xl justify-center items-center bg-white w-full mt-5 py-5">
          <Link href="/forgot-password" className="text-blue-500 mt-24 text-center hover:underline">
            Register as
          </Link>

          <div className="flex gap-4">
            <button className="w-36 p-3 mt-5 bg-blue-400 font-bold text-white rounded-lg duration-300 hover:bg-blue-700 transition">
              Operator
            </button>

            <button className="w-36 p-3 mt-5 bg-blue-400 font-bold text-white rounded-lg duration-300 hover:bg-blue-700 transition">
              Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
