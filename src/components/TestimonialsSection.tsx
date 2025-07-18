"use client";

// import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SpotlightCard from "./Card/SpotlightCard";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const metrics = [
  { value: 500, suffix: "+", label: "Sales Professionals" },
  { value: 3, suffix: "x", label: "More Qualified Conversations" },
  { value: 85, suffix: "%", label: "Average Response Rate" },
  { value: 24, suffix: "hr", label: "Average Response Time" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    title: "VP of Sales, TechFlow Solutions",
    industry: "Enterprise SaaS",
    quote:
      "Dripwises has completely transformed our prospecting process. We've seen a 3x increase in qualified conversations and our team is actually excited about LinkedIn outreach now.",
    result: "Key Result: 3x qualified conversations",
    image: "/avatar/avatar1.png",
  },
  {
    name: "Michael Rodriguez",
    title: "Head of Business Development",
    industry: "Financial Services",
    quote:
      "The quality of leads we're getting through Dripwises is incredible. Instead of cold outreach, we're joining conversations where prospects actually want to hear from us.",
    result: "Key Result: 85% response rate",
    image: "/avatar/avatar2.png",
  },
  {
    name: "Jennifer Park",
    title: "Senior Sales Executive",
    industry: "Database Technology",
    quote:
      "I was skeptical about AI prospecting tools, but Dripwises delivers. The opportunities it surfaces are genuinely relevant and the engagement suggestions are spot-on.",
    result: "Key Result: 60% more meetings booked",
    image: "/avatar/avatar1.png",
  },
  {
    name: "Sarah Chen",
    title: "VP of Sales, TechFlow Solutions",
    industry: "Enterprise SaaS",
    quote:
      "Dripwises has completely transformed our prospecting process. We've seen a 3x increase in qualified conversations and our team is actually excited about LinkedIn outreach now.",
    result: "Key Result: 3x qualified conversations",
    image: "/avatar/avatar1.png",
  },
  {
    name: "Michael Rodriguez",
    title: "Head of Business Development",
    industry: "Financial Services",
    quote:
      "The quality of leads we're getting through Dripwises is incredible. Instead of cold outreach, we're joining conversations where prospects actually want to hear from us.",
    result: "Key Result: 85% response rate",
    image: "/avatar/avatar2.png",
  },
  {
    name: "Jennifer Park",
    title: "Senior Sales Executive",
    industry: "Database Technology",
    quote:
      "I was skeptical about AI prospecting tools, but Dripwises delivers. The opportunities it surfaces are genuinely relevant and the engagement suggestions are spot-on.",
    result: "Key Result: 60% more meetings booked",
    image: "/avatar/avatar1.png",
  },
];

export default function ProspectingStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative w-full bg-background text-foreground py-24 px-4 md:px-10 overflow-hidden"
    >
      {/* Blurry background blobs */}
      <div className="absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Trusted by Sales Leaders</span>
        </h2>
        <p className="text-muted-foreground mt-4">
          See how Dripwises is helping sales teams build authentic relationships
          and drive results.
        </p>
      </div>

      {/* CountUp Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto text-center">
        {metrics.map((metric, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-cyan-400">
              {inView && (
                <CountUp
                  end={metric.value}
                  suffix={metric.suffix}
                  duration={1.2}
                />
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Slider */}
      <div className="mt-20 relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".test-swiper-button-next",
            prevEl: ".test-swiper-button-prev",
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md h-full">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full border border-white/10"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.industry}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex gap-1 text-yellow-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Icon
                            key={i}
                            icon="ic:round-star"
                            width={18}
                            height={18}
                          />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      “{item.quote}”
                    </p>
                  </div>

                  <p className="text-xs text-cyan-400 font-medium mt-2">
                    {item.result}
                  </p>
                </div>
              </SpotlightCard>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="test-swiper-button-prev absolute left-[-2rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
          <Icon icon="mingcute:left-line" className="text-white" width={30} />
        </div>
        <div className="test-swiper-button-next absolute right-[-2rem] top-1/2 z-10 -translate-y-1/2 cursor-pointer">
          <Icon icon="mingcute:right-line" className="text-white" width={30} />
        </div>
      </div>
    </section>
  );
}
