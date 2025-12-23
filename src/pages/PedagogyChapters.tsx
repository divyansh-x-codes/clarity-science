import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chapters = [
  { id: 1, nameEn: "Nature and Scope of Science", nameHi: "विज्ञान की प्रकृति और क्षेत्र" },
  { id: 2, nameEn: "Aims and Objectives of Science Teaching", nameHi: "विज्ञान शिक्षण के उद्देश्य" },
  { id: 3, nameEn: "Methods of Teaching Science", nameHi: "विज्ञान शिक्षण की विधियाँ" },
  { id: 4, nameEn: "Learning Resources in Science", nameHi: "विज्ञान में अधिगम संसाधन" },
  { id: 5, nameEn: "Evaluation in Science", nameHi: "विज्ञान में मूल्यांकन" },
  { id: 6, nameEn: "NCF 2005 Guidelines for Science", nameHi: "NCF 2005 विज्ञान दिशानिर्देश" },
  { id: 7, nameEn: "Remedial Teaching in Science", nameHi: "विज्ञान में उपचारात्मक शिक्षण" },
  { id: 8, nameEn: "Problems in Teaching Science", nameHi: "विज्ञान शिक्षण की समस्याएँ" },
];

const PedagogyChapters = () => {
  return (
    <>
      <Helmet>
        <title>Science Pedagogy Chapters - CTET | Science by KanakSom</title>
        <meta name="description" content="Free Science Pedagogy chapter-wise PDFs for CTET Paper II. Download study materials for teaching methodology, NCF guidelines, assessment strategies." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/#subjects">
                <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Subjects
                </Button>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-pedagogy/20 mb-6">
                <BookOpen className="w-10 h-10 text-pedagogy" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Science Pedagogy</h1>
              <p className="text-xl text-muted-foreground">विज्ञान शिक्षाशास्त्र</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Teaching methodology, NCF guidelines, assessment strategies for CTET Paper II
              </p>
            </motion.div>

            {/* Chapters Grid */}
            <div className="grid gap-4">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-5 rounded-xl border border-pedagogy/20 bg-gradient-to-r from-pedagogy/5 to-transparent hover:border-pedagogy/40 hover:shadow-lg hover:shadow-pedagogy/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pedagogy/10 text-pedagogy font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-pedagogy transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-pedagogy hover:bg-pedagogy/10">
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-pedagogy/30 text-pedagogy hover:bg-pedagogy/10">
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PedagogyChapters;
