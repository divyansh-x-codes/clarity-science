import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Leaf, ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chapters = [
  { id: 1, nameEn: "Food: Where Does It Come From?", nameHi: "भोजन: यह कहाँ से आता है?" },
  { id: 2, nameEn: "Components of Food", nameHi: "भोजन के घटक" },
  { id: 3, nameEn: "Getting to Know Plants", nameHi: "पौधों को जानिए" },
  { id: 4, nameEn: "Body Movements", nameHi: "शरीर में गति" },
  { id: 5, nameEn: "Living Organisms and Their Surroundings", nameHi: "सजीव और उनका परिवेश" },
  { id: 6, nameEn: "Nutrition in Plants", nameHi: "पौधों में पोषण" },
  { id: 7, nameEn: "Nutrition in Animals", nameHi: "जंतुओं में पोषण" },
  { id: 8, nameEn: "Respiration in Organisms", nameHi: "जीवों में श्वसन" },
  { id: 9, nameEn: "Transportation in Animals and Plants", nameHi: "जंतुओं और पौधों में परिवहन" },
  { id: 10, nameEn: "Reproduction in Plants", nameHi: "पौधों में जनन" },
  { id: 11, nameEn: "Reproduction in Animals", nameHi: "जंतुओं में जनन" },
  { id: 12, nameEn: "Cell: Structure and Functions", nameHi: "कोशिका: संरचना और कार्य" },
  { id: 13, nameEn: "Conservation of Plants and Animals", nameHi: "पौधों और जंतुओं का संरक्षण" },
  { id: 14, nameEn: "Microorganisms: Friend and Foe", nameHi: "सूक्ष्मजीव: मित्र और शत्रु" },
];

const BiologyChapters = () => {
  return (
    <>
      <Helmet>
        <title>Biology Chapters - CTET Science | Science by KanakSom</title>
        <meta name="description" content="Free Biology chapter-wise PDFs for CTET Paper II (Class 6-8). Download study materials for living organisms, human body, environment and ecosystem." />
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-biology/20 mb-6">
                <Leaf className="w-10 h-10 text-biology" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Biology</h1>
              <p className="text-xl text-muted-foreground">जीव विज्ञान</p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Living organisms, human body, environment and ecosystem for CTET Paper II
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
                  className="group p-5 rounded-xl border border-biology/20 bg-gradient-to-r from-biology/5 to-transparent hover:border-biology/40 hover:shadow-lg hover:shadow-biology/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-biology/10 text-biology font-semibold">
                        {chapter.id}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-biology transition-colors">
                          {chapter.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">{chapter.nameHi}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-biology hover:bg-biology/10">
                        <FileText className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-biology/30 text-biology hover:bg-biology/10">
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

export default BiologyChapters;
