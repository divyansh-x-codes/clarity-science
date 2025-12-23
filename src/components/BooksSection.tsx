import { motion } from "framer-motion";
import { Book, Download, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "CTET Science (Class 6-8 Content)",
    author: "Kanak Som",
    description: "Built for concept clarity, not rote learning.",
    color: "from-primary/20 via-secondary/10 to-accent/5",
    featured: true,
  },
  {
    title: "CTET All-Year PYQs with Solutions",
    author: "Kanak Som",
    description: "Understand why an answer is right, not just which one.",
    color: "from-chemistry/20 via-highlight/10 to-primary/5",
    featured: false,
  },
];

const BooksSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(245,80%,60%,0.1),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-4">
            <Book className="w-4 h-4" />
            Free Study Material
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Books by <span className="gradient-text">KanakSom</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guides crafted with years of teaching experience
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 2,
              }}
              className="group perspective-1000"
            >
              <div
                className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${book.color} border border-border/30 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_30px_80px_-20px_hsl(245,80%,50%,0.2)]`}
              >
                {/* Featured badge */}
                {book.featured && (
                  <div className="absolute -top-3 -right-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Book illustration */}
                <div className="mb-6">
                  <div className="w-20 h-28 rounded-lg bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center border border-border/50 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Book className="w-10 h-10 text-foreground/80" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  by {book.author}
                </p>
                <p className="text-muted-foreground mb-8 italic">
                  "{book.description}"
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="glow" size="default" className="flex-1">
                    <Download className="w-4 h-4" />
                    Download Free
                  </Button>
                  <Button variant="glass" size="default">
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
