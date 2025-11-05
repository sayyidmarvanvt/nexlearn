"use client";

export default function AuthWrapper({
  title,
  subtitle,
  children,
  footer,
}: {
  title?: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between p-4 lg:px-5 w-full h-full min-h-[420px]">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {title && (
          <h2 className="text-base sm:text-lg font-bold text-brand mb-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-xs sm:text-sm text-brand mb-6">{subtitle}</p>
        )}
        {children}
      </div>

      {/* Fixed footer always at bottom */}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
