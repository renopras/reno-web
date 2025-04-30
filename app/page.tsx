import Link from "next/link"
import Image from "next/image"
import { BookOpen, Video, FileText, GraduationCap, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">BelajarSMA</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium">
              Beranda
            </Link>
            <Link href="/materi" className="text-muted-foreground hover:text-foreground">
              Materi
            </Link>
            <Link href="/video" className="text-muted-foreground hover:text-foreground">
              Video
            </Link>
            <Link href="/soal" className="text-muted-foreground hover:text-foreground">
              Soal Latihan
            </Link>
            <Link href="/tentang" className="text-muted-foreground hover:text-foreground">
              Tentang Kami
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Cari materi..." className="w-64 pl-8" />
            </div>
            <Button>Masuk</Button>
            <Button variant="outline" className="hidden md:flex">
              Daftar
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Belajar Lebih Mudah dan Menyenangkan
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Platform pembelajaran digital untuk siswa SMA dengan materi lengkap, video pembelajaran, dan latihan
                    soal untuk persiapan ujian.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/materi">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Mulai Belajar
                    </Button>
                  </Link>
                  <Link href="/tentang">
                    <Button size="lg" variant="outline">
                      Pelajari Selengkapnya
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Siswa belajar"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kategori Pembelajaran</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Pilih kategori pembelajaran sesuai kebutuhan Anda
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <BookOpen className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Materi Pelajaran</CardTitle>
                  <CardDescription>Materi lengkap untuk semua mata pelajaran SMA</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Akses materi pelajaran dari kelas 10 hingga kelas 12 untuk semua jurusan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/materi">
                    <Button variant="outline" className="w-full">
                      Lihat Materi
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Video className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Video Pembelajaran</CardTitle>
                  <CardDescription>Video penjelasan dari guru-guru terbaik</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Tonton video pembelajaran yang disusun secara sistematis untuk memudahkan pemahaman.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/video">
                    <Button variant="outline" className="w-full">
                      Lihat Video
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <FileText className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Soal Latihan</CardTitle>
                  <CardDescription>Latihan soal dan pembahasan lengkap</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Kerjakan soal-soal latihan dan dapatkan pembahasan lengkap untuk persiapan ujian.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/soal">
                    <Button variant="outline" className="w-full">
                      Lihat Soal
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mata Pelajaran Populer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Materi pelajaran yang paling banyak dipelajari
                </p>
              </div>
            </div>
            <Tabs defaultValue="ipa" className="mt-8 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ipa">IPA</TabsTrigger>
                <TabsTrigger value="ips">IPS</TabsTrigger>
                <TabsTrigger value="bahasa">Bahasa</TabsTrigger>
              </TabsList>
              <TabsContent value="ipa" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {["Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris", "Bahasa Indonesia"].map((subject) => (
                    <Link href={`/materi/${subject.toLowerCase().replace(/\s+/g, "-")}`} key={subject}>
                      <Card className="transition-all hover:shadow-md">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{subject}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Materi lengkap {subject} untuk SMA</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ips" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {["Ekonomi", "Sosiologi", "Geografi", "Sejarah", "Bahasa Inggris", "Bahasa Indonesia"].map(
                    (subject) => (
                      <Link href={`/materi/${subject.toLowerCase().replace(/\s+/g, "-")}`} key={subject}>
                        <Card className="transition-all hover:shadow-md">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{subject}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Materi lengkap {subject} untuk SMA</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="bahasa" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Bahasa Indonesia",
                    "Bahasa Inggris",
                    "Bahasa Jepang",
                    "Bahasa Mandarin",
                    "Sastra Indonesia",
                    "Antropologi",
                  ].map((subject) => (
                    <Link href={`/materi/${subject.toLowerCase().replace(/\s+/g, "-")}`} key={subject}>
                      <Card className="transition-all hover:shadow-md">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{subject}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Materi lengkap {subject} untuk SMA</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Video Pembelajaran Terbaru</h2>
                <p className="text-muted-foreground md:text-lg">
                  Video pembelajaran terbaru dari guru-guru terbaik untuk membantu Anda memahami materi dengan lebih
                  baik.
                </p>
                <Link href="/video">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Lihat Semua Video</Button>
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { title: "Integral Substitusi", subject: "Matematika", duration: "15:24" },
                  { title: "Hukum Newton", subject: "Fisika", duration: "12:45" },
                  { title: "Reaksi Redoks", subject: "Kimia", duration: "18:30" },
                  { title: "Sistem Peredaran Darah", subject: "Biologi", duration: "20:15" },
                ].map((video, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=${video.title}`}
                        width={400}
                        height={200}
                        alt={video.title}
                        className="aspect-video object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{video.title}</CardTitle>
                      <CardDescription>{video.subject}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bergabung Sekarang</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Daftar sekarang dan dapatkan akses ke semua materi pembelajaran
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <Input type="email" placeholder="Masukkan email Anda" className="max-w-lg flex-1" />
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                    Daftar
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Dengan mendaftar, Anda menyetujui{" "}
                  <Link href="/syarat-ketentuan" className="underline underline-offset-2">
                    Syarat & Ketentuan
                  </Link>{" "}
                  kami.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BelajarSMA. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <Link href="/tentang" className="text-sm text-muted-foreground hover:underline">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-sm text-muted-foreground hover:underline">
              Kontak
            </Link>
            <Link href="/syarat-ketentuan" className="text-sm text-muted-foreground hover:underline">
              Syarat & Ketentuan
            </Link>
            <Link href="/kebijakan-privasi" className="text-sm text-muted-foreground hover:underline">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
