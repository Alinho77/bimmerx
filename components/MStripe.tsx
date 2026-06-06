"use client";

interface MStripeProps {
  className?: string;
  height?: number;
  vertical?: boolean;
}

export default function MStripe({ className = "", height = 3, vertical = false }: MStripeProps) {
  if (vertical) {
    return (
      <div
        className={`m-stripe ${className}`}
        style={{ width: `${height}px`, height: "100%" }}
      />
    );
  }
  return (
    <div
      className={`m-stripe w-full ${className}`}
      style={{ height: `${height}px` }}
    />
  );
}
