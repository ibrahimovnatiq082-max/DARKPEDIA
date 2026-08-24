import React, { ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  key?: React.Key;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('DARKPEDIA ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.hash = '#/';
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.hash = '#/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-lg bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#8B0000]/10 dark:bg-[#ef4444]/10 text-[#8B0000] dark:text-[#ef4444] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a] dark:text-white">
                Sistem Sabitliyi Qorundu
              </h2>
              <p className="text-xs sm:text-sm text-[#71717a] dark:text-[#a1a1aa] leading-relaxed font-serif">
                Səhifə məlumatlarının yüklənməsi zamanı müvəqqəti nasazlıq baş verdi. Ensiklopediya bazası bərpa olunur.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-4 py-2 bg-[#8B0000] hover:bg-[#700000] text-white font-semibold rounded flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Ana Səhifəyə Qayıt</span>
              </button>
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-4 py-2 bg-[#f4f4f5] dark:bg-[#27272a] hover:bg-[#e4e4e7] dark:hover:bg-[#3f3f46] text-[#1a1a1a] dark:text-white font-semibold rounded border border-[#e4e4e7] dark:border-[#3f3f46] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Yenilə</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
