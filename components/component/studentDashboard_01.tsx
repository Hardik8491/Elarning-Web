/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nnVBgznQkpM
 */
"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveBar } from "@nivo/bar";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Progress } from "@chakra-ui/react";

export function StudentDashboard() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Soft Skill</CardTitle>
              <MoreHorizontalIcon className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Pemecahan Masalah</Badge>
              <Badge variant="secondary">Disiplin</Badge>
              <Badge variant="secondary">Kreatif</Badge>
              <Badge variant="secondary">Berfikir Kritis</Badge>
              <Badge variant="secondary">Keterampilan</Badge>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Waktu Belajar</CardTitle>
              <ClockIcon className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <BarChart className="w-full h-[200px]" />
              <p className="text-center font-semibold">Total 180 jam</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Riwayat Pengajar</CardTitle>
              <MoreHorizontalIcon className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    alt="Ridwan B"
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="Diana L"
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="Bastian V"
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <AvatarFallback>BV</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    alt="Ismail R"
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <AvatarFallback>IR</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Bidang Minat</CardTitle>
              <MoreHorizontalIcon className="text-gray-400" />
            </CardHeader>
            <CardContent>
              {/* <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Olahraga</p>
                  <Progress className="w-[60%]" value={70} />
                </div>
                <div className="flex justify-between">
                  <p>Teknologi</p>
                  <Progress className="w-[60%]" value={50} />
                </div>
                <div className="flex justify-between">
                  <p>Sastra</p>
                  <Progress className="w-[60%]" value={30} />
                </div>
                <div className="flex justify-between">
                  <p>Kesenian</p>
                  <Progress className="w-[60%]" value={80} />
                </div>
              </div> */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Olahraga</span>
                  <div className="w-1/2 h-2 bg-gray-200 rounded">
                    <div
                      className="bg-blue-500 h-2 rounded"
                      style={{
                        width: "70%",
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Teknologi</span>
                  <div className="w-1/2 h-2 bg-gray-200 rounded">
                    <div
                      className="bg-orange-500 h-2 rounded"
                      style={{
                        width: "80%",
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sastra</span>
                  <div className="w-1/2 h-2 bg-gray-200 rounded">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{
                        width: "50%",
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kesenian</span>
                  <div className="w-1/2 h-2 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-2 rounded"
                      style={{
                        width: "60%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Sedang Berlangsung</CardTitle>
              <MoreHorizontalIcon className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p>Kursus Matematika</p>
                  <ChevronRightIcon className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">
                  1 Maret 2023 - 1 Mei 2023
                </p>
                <div className="flex justify-between items-center">
                  <p>Kursus Bahasa Jepang</p>
                  <ChevronRightIcon className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">
                  14 Maret 2023 - 14 Juni 2023
                </p>
                <div className="flex justify-between items-center">
                  <p>Kursus Bahasa Inggris</p>
                  <ChevronRightIcon className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">
                  8 Februari 2023 - 8 April 2023
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Reward</CardTitle>
              <MoreHorizontalIcon className="text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-around">
                <TrophyIcon className="text-yellow-400" />
                <MedalIcon className="text-gray-400" />
                <StarIcon className="text-yellow-500" />
                <GiftIcon className="text-red-400" />
                <ThumbsUpIcon className="text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="w-full">
            <CardHeader>
              <Avatar>
                <AvatarImage
                  alt="Iqbaal Ramadhan"
                  src="/placeholder.svg?height=100&width=100"
                />
              </Avatar>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Iqbaal Ramadhan</h3>
              <p className="text-sm text-gray-500">@iqbaale</p>
              <div className="flex items-center space-x-2 my-4">
                <CalendarIcon className="text-gray-400" />
                <span>28 Desember 2004</span>
              </div>
              <div className="flex items-center space-x-2">
                <LocateIcon className="text-gray-400" />
                <span>Sekolah Pelita Harapan</span>
              </div>
              <div className="flex items-center space-x-2">
                <HomeIcon className="text-gray-400" />
                <span>Jl. Lavender III, Klp. Dua, Tangerang</span>
              </div>
              <p className="mt-4">Tentang Saya</p>
              <p className="text-sm text-gray-500">
                Hi! Saya Iqbaal biasa dipanggil Ale. Saya sangat menyukai dunia
                desain dan photography. Selain itu saya juga menyukai musik,
                beberapa alat musik yang dapat saya mainkan yaitu gitar akustik,
                bass, dan keyboard.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full bg-[#E8F4FF]">
            <CardHeader>
              <Avatar>
                <AvatarImage
                  alt="Ny. Adriana Ramha"
                  src="/placeholder.svg?height=40&width=40"
                />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Wali Murid</h3>
              <p className="text-sm text-gray-500">@rahmaadr</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MoreHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function MedalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
