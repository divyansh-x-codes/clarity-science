import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Atom, ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chapters = [
  { id: 1, nameEn: "Motion and Measurement of Distances", nameHi: "गति और दूरियों का मापन" },
  { id: 2, nameEn: "Light, Shadows and Reflections", nameHi: "प्रकाश, छाया और परावर्तन" },
  { id: 3, nameEn: "Electricity and Circuits", nameHi: "विद्युत और परिपथ" },
  { id: 4, nameEn: "Fun with Magnets", nameHi: "चुंबकों का खेल" },
  { id: 5, nameEn: "Motion and Time", nameHi: "गति और समय" },
  { id: 6, nameEn: "Electric Current and its Effects", nameHi: "विद्युत धारा और इसके प्रभाव" },
  { id: 7, nameEn: "Light", nameHi: "प्रकाश" },
  { id: 8, nameEn: "Sound", nameHi: "ध्वनि" },
  { id: 9, nameEn: "Force and Pressure", nameHi: "बल और दाब" },
  { id: 10, nameEn: "Friction", nameHi: "घर्षण" },
  { id: 11, nameEn: "Chemical Effects of Electric Current", nameHi: "विद्युत धारा के रासायनिक प्रभाव" },
  { id: 12, nameEn: "Stars and the Solar System", nameHi: "तारे और सौर मंडल" },
];

const PhysicsChapters = () => {
  return (
    <>
      <Helmet>
        <title>Physics Chapters - CTET Science | Science by KanakSom</title>
        <meta name="description" content="Free Physics chapter-wise PDFs for CTET Paper II (Class 6-8). Download study materials for motion, light, electricity, magnetism and more." />
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-physics/20 mb-6">
                <Atom className="w-10 h-10 text-physics" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Physics</h1>
              <p className="text-xl text-muted-foreground">भौतिक विज्ञान</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Force, motion, light, sound, electricity and magnetism concepts for CTET Paper II
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
                  className="group p-5 rounded-xl border border-physics/20 bg-gradient-to-r from-physics/5 to-transparent hover:border-physics/40 hover:shadow-lg hover:shadow-physics/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-physics/10 text-physics font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-physics transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-physics hover:bg-physics/10">
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-physics/30 text-physics hover:bg-physics/10">
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

export default PhysicsChapters;
