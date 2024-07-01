import { Header} from "@/src/components/share/Header";
import Footer from "@/src/components/share/Footer";
import ScrollToTop from "@/src/components/BackToTop/ScrollToTop";

export default function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header locale={""} />
      <main className="min-h-screen grid place-content-center bg-blue-400">{children}</main>
  <ScrollToTop/>
      <Footer />
      
    </>
  )
}