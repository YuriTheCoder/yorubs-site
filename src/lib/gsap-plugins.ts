"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { CustomEase } from "gsap/CustomEase"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP)

CustomEase.create("yorubs-smooth", "M0,0 C0.16,1 0.3,1 1,1")
CustomEase.create("yorubs-bounce", "M0,0 C0.34,1.56 0.64,1 1,1")

export { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP }
