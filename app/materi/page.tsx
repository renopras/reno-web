import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MateriPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Materi Pelajaran</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Akses materi pelajaran lengkap untuk semua mata pelajaran SMA dari kelas 10 hingga kelas 12
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Cari materi pelajaran..." className="w-full pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kelas</h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      Kelas 10
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Kelas 11
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Kelas 12
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jurusan</h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      IPA
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      IPS
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Bahasa
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mata Pelajaran</h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      Matematika
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Fisika
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Kimia
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Biologi
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Bahasa Indonesia
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Bahasa Inggris
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Sejarah
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Ekonomi
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Geografi
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Sosiologi
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Semua Materi</h2>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="terbaru">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terbaru">Terbaru</SelectItem>
                        <SelectItem value="terpopuler">Terpopuler</SelectItem>
                        <SelectItem value="a-z">A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Persamaan Kuadrat", subject: "Matematika", level: "Kelas 10", items: 12 },
                    { title: "Hukum Newton", subject: "Fisika", level: "Kelas 10", items: 8 },
                    { title: "Struktur Atom", subject: "Kimia", level: "Kelas 10", items: 10 },
                    { title: "Sel dan Jaringan", subject: "Biologi", level: "Kelas 11", items: 15 },
                    { title: "Teks Eksposisi", subject: "Bahasa Indonesia", level: "Kelas 11", items: 7 },
                    { title: "Narrative Text", subject: "Bahasa Inggris", level: "Kelas 11", items: 9 },
                    { title: "Sejarah Indonesia", subject: "Sejarah", level: "Kelas 11", items: 14 },
                    { title: "Ekonomi Makro", subject: "Ekonomi", level: "Kelas 12", items: 11 },
                    { title: "Geografi Indonesia", subject: "Geografi", level: "Kelas 12", items: 13 },
                  ].map((materi, index) => (
                    <Link
                      href={`/materi/${materi.subject.toLowerCase().replace(/\s+/g, "-")}/${materi.title.toLowerCase().replace(/\s+/g, "-")}`}
                      key={index}
                    >
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <div className="relative">
                          <Image
                            src={`/placeholder.svg?height=200&width=400&text=${materi.title}`}
                            width={400}
                            height={200}
                            alt={materi.title}
                            className="aspect-video object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 text-xs px-2 py-1 rounded-full">
                            {materi.level}
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{materi.title}</CardTitle>
                          <CardDescription>{materi.subject}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground">{materi.items} materi pembelajaran</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" size="sm" className="gap-1 ml-auto">
                            Pelajari <ChevronRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="gap-2">
                    Muat Lebih Banyak
                  </Button>
                </div>
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
