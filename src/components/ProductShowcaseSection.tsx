import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Mute Wood Panel – Ayous",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "Elegant wood-finished acoustic panel with sound-absorbing felt backing. Ideal for modern interiors.",
    specs: "240x60x2.1cm, NRC 0.4–0.8, recycled PET felt, Ayous veneer",
    category: "Wood Panels",
    price: "Dhs. 650.00",
    featured: true,
  },
  {
    id: 2,
    name: "Plain White Felt Panel (24mm)",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description:
      "High-performance PET felt panel for walls or ceilings. Simple, versatile, and effective.",
    specs: "24mm thick, NRC 0.8, recycled PET",
    category: "Felt Panels",
    price: "Dhs. 200.00",
    featured: true,
  },
  {
    id: 3,
    name: "Hexagon Panel (Sea Green)",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description:
      "Modular hexagon-shaped acoustic panels for creative wall designs.",
    specs: "PET felt, multiple colors, NRC 0.8",
    category: "Felt Panels",
    price: "Dhs. 350.00",
    featured: false,
  },
  {
    id: 4,
    name: "Mute Pod – Small",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description:
      "Soundproof pod for private calls and focused work in open offices.",
    specs: "Small footprint, integrated ventilation, acoustic glass",
    category: "Pods & Rooms",
    price: "Dhs. 20,450.00",
    featured: true,
  },
  {
    id: 5,
    name: "Soundproof Door Seal",
    image: "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94?auto=format&fit=crop&w=600&q=80",
    description:
      "Acoustic drop-down seal for doors to block noise leakage.",
    specs: "Easy install, effective for offices and studios",
    category: "Soundproofing",
    price: "Dhs. 95.00",
    featured: false,
  },
];

const categories = ["All", "Wood Panels", "Felt Panels", "Pods & Rooms", "Soundproofing"];

const projectTypes = [
  "Office/Commercial",
  "Home/Residential", 
  "Recording Studio",
  "Restaurant/Hospitality",
  "Educational Institution",
  "Healthcare Facility",
  "Other"
];

const roomSizes = [
  "Small (under 50 sq ft)",
  "Medium (50-200 sq ft)", 
  "Large (200-500 sq ft)",
  "Extra Large (500+ sq ft)"
];

const ProductShowcaseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    roomSize: "",
    message: ""
  });

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Quote request submitted:", quoteForm);
    
    // Reset form and close modal
    setQuoteForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      roomSize: "",
      message: ""
    });
    setIsQuoteModalOpen(false);
    
    // Show success message (you can implement a toast notification here)
    alert("Thank you! We'll get back to you within 24 hours with your custom quote.");
  };

  const handleInputChange = (field: string, value: string) => {
    setQuoteForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Premium Acoustic Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our range of high-performance acoustic panels, designed to transform your space 
          with both beauty and functionality.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <span className="text-lg font-bold text-blue-600">{product.price}</span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
              
              <div className="text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2 mb-4">
                {product.specs}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 group-hover:shadow-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">
          Need a custom solution? Our team can help design the perfect acoustic treatment for your space.
        </p>
        <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Get Custom Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Get Your Custom Quote
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={quoteForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={quoteForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={quoteForm.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={quoteForm.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={quoteForm.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roomSize">Room Size *</Label>
                  <Select value={quoteForm.roomSize} onValueChange={(value) => handleInputChange("roomSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room size" />
                    </SelectTrigger>
                    <SelectContent>
                      {roomSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  value={quoteForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your acoustic needs, specific requirements, or any questions you have..."
                  rows={4}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Submit Quote Request
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsQuoteModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductShowcaseSection; 