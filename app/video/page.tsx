import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Play, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VideoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Video Pembelajaran</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Tonton video pembelajaran dari guru-guru terbaik untuk membantu Anda memahami materi dengan lebih baik
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Cari video pembelajaran..." className="w-full pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="semua" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="semua">Semua</TabsTrigger>
                  <TabsTrigger value="matematika">Matematika</TabsTrigger>
                  <TabsTrigger value="fisika">Fisika</TabsTrigger>
                  <TabsTrigger value="kimia">Kimia</TabsTrigger>
                  <TabsTrigger value="biologi">Biologi</TabsTrigger>
                </TabsList>
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

              <TabsContent value="semua" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Integral Substitusi", subject: "Matematika", duration: "15:24", level: "Kelas 12" },
                    { title: "Hukum Newton", subject: "Fisika", duration: "12:45", level: "Kelas 10" },
                    { title: "Reaksi Redoks", subject: "Kimia", duration: "18:30", level: "Kelas 11" },
                    { title: "Sistem Peredaran Darah", subject: "Biologi", duration: "20:15", level: "Kelas 11" },
                    { title: "Turunan Fungsi", subject: "Matematika", duration: "16:50", level: "Kelas 11" },
                    { title: "Gelombang Elektromagnetik", subject: "Fisika", duration: "14:20", level: "Kelas 12" },
                    { title: "Asam dan Basa", subject: "Kimia", duration: "17:35", level: "Kelas 10" },
                    { title: "Sistem Pernapasan", subject: "Biologi", duration: "19:10", level: "Kelas 11" },
                    { title: "Barisan dan Deret", subject: "Matematika", duration: "13:45", level: "Kelas 10" },
                  ].map((video, index) => (
                    <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                      <div className="relative group">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=${video.title}`}
                          width={400}
                          height={200}
                          alt={video.title}
                          className="aspect-video object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-white/20 backdrop-blur-sm text-white"
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute top-2 left-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 text-xs px-2 py-1 rounded-full">
                          {video.level}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{video.title}</CardTitle>
                        <CardDescription>{video.subject}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="gap-1 ml-auto">
                          Tonton <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="matematika" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Integral Substitusi", subject: "Matematika", duration: "15:24", level: "Kelas 12" },
                    { title: "Turunan Fungsi", subject: "Matematika", duration: "16:50", level: "Kelas 11" },
                    { title: "Barisan dan Deret", subject: "Matematika", duration: "13:45", level: "Kelas 10" },
                    { title: "Matriks", subject: "Matematika", duration: "14:30", level: "Kelas 11" },
                    { title: "Trigonometri", subject: "Matematika", duration: "18:15", level: "Kelas 10" },
                    { title: "Statistika", subject: "Matematika", duration: "12:40", level: "Kelas 12" },
                  ].map((video, index) => (
                    <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                      <div className="relative group">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=${video.title}`}
                          width={400}
                          height={200}
                          alt={video.title}
                          className="aspect-video object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-white/20 backdrop-blur-sm text-white"
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute top-2 left-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 text-xs px-2 py-1 rounded-full">
                          {video.level}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{video.title}</CardTitle>
                        <CardDescription>{video.subject}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="gap-1 ml-auto">
                          Tonton <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Konten tab lainnya akan serupa */}
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-2">
                Muat Lebih Banyak
              </Button>
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
