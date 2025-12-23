import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Beaker, ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chapters = [
  { id: 1, nameEn: "Sorting Materials into Groups", nameHi: "पदार्थों का वर्गीकरण" },
  { id: 2, nameEn: "Separation of Substances", nameHi: "पदार्थों का पृथक्करण" },
  { id: 3, nameEn: "Changes Around Us", nameHi: "हमारे आस-पास के परिवर्तन" },
  { id: 4, nameEn: "Fibre to Fabric", nameHi: "रेशे से वस्त्र तक" },
  { id: 5, nameEn: "Acids, Bases and Salts", nameHi: "अम्ल, क्षार और लवण" },
  { id: 6, nameEn: "Physical and Chemical Changes", nameHi: "भौतिक और रासायनिक परिवर्तन" },
  { id: 7, nameEn: "Synthetic Fibres and Plastics", nameHi: "संश्लेषित रेशे और प्लास्टिक" },
  { id: 8, nameEn: "Materials: Metals and Non-Metals", nameHi: "पदार्थ: धातु और अधातु" },
  { id: 9, nameEn: "Coal and Petroleum", nameHi: "कोयला और पेट्रोलियम" },
  { id: 10, nameEn: "Combustion and Flame", nameHi: "दहन और ज्वाला" },
];

const ChemistryChapters = () => {
  return (
    <>
      <Helmet>
        <title>Chemistry Chapters - CTET Science | Science by KanakSom</title>
        <meta name="description" content="Free Chemistry chapter-wise PDFs for CTET Paper II (Class 6-8). Download study materials for materials, chemical changes, acids, bases and more." />
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-chemistry/20 mb-6">
                <Beaker className="w-10 h-10 text-chemistry" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Chemistry</h1>
              <p className="text-xl text-muted-foreground">रसायन विज्ञान</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Matter, elements, compounds, chemical reactions simplified for CTET Paper II
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
                  className="group p-5 rounded-xl border border-chemistry/20 bg-gradient-to-r from-chemistry/5 to-transparent hover:border-chemistry/40 hover:shadow-lg hover:shadow-chemistry/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-chemistry/10 text-chemistry font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-chemistry transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-chemistry hover:bg-chemistry/10">
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-chemistry/30 text-chemistry hover:bg-chemistry/10">
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

export default ChemistryChapters;
