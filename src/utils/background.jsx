import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Sun = () => {
  const sunRef = useRef();
  useFrame(({ camera }) => {
    if (sunRef.current) {
      sunRef.current.lookAt(camera.position);
    }
  });

  return (
    <>
      <pointLight position={[300, 300, 500]} intensity={5} color="#ffcc33" />
      <mesh position={[300, 300, 500]} ref={sunRef}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshStandardMaterial
          emissive="#ffff66"
          emissiveIntensity={5}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

const Stars = ({ motion, isDark }) => {
  const pointsRef = useRef();
  const starCount = 2000;

  useEffect(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;
    }

    pointsRef.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += motion.current.vx * 0.002;
      pointsRef.current.rotation.x += motion.current.vy * 0.002;
      motion.current.vx *= 0.95;
      motion.current.vy *= 0.95;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        color={isDark ? "#ffffff" : "black"}
        size={isDark ? 3 : 5}
        sizeAttenuation
        transparent
        opacity={isDark ? 0.5 : 0.7}
      />
    </points>
  );
};

const Background = ({ children, theme }) => {
  const wrapperRef = useRef();
  const motion = useRef({ vx: 0, vy: 0, lastX: 0, lastY: 0 });
  const isDark = theme === "dark";

  // Shared handler
  const updateMotion = (x, y) => {
    const deltaX = x - motion.current.lastX;
    const deltaY = y - motion.current.lastY;
    motion.current.vx = deltaX;
    motion.current.vy = deltaY;
    motion.current.lastX = x;
    motion.current.lastY = y;
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const handleMouseMove = (e) => updateMotion(e.clientX, e.clientY);

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        updateMotion(touch.clientX, touch.clientY);
      }
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("touchmove", handleTouchMove);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full min-h-[100dvh] overflow-hidden ${
        isDark
          ? "bg-slate-950"
          : "bg-gradient-to-br from-white via-gray-100 to-slate-900"
      }`}
    >
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 800], fov: 75 }}>
          <Stars motion={motion} isDark={isDark} />
          <Sun />
          <EffectComposer>
            <Bloom
              intensity={10}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
              height={300}
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div
        className={`relative z-10 w-full min-h-[100dvh] overflow-auto ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
