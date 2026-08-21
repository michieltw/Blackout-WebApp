import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className={`w-full overflow-hidden border border-slate-200 rounded-lg shadow-sm bg-white ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          {children}
        </table>
      </div>
    </div>
  )
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="text-xs uppercase bg-slate-50 text-slate-700 border-b border-slate-200">
      <tr>{children}</tr>
    </thead>
  )
}

export function TableHead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <th scope="col" className={`px-6 py-3 font-medium tracking-wider ${className}`}>{children}</th>
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-slate-100">{children}</tbody>
}

export function TableRow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <tr className={`hover:bg-slate-50 transition-colors ${className}`}>{children}</tr>
}

export function TableCell({ children, className = '', colSpan }: { children: React.ReactNode; className?: string; colSpan?: number }) {
  return <td colSpan={colSpan} className={`px-6 py-4 tabular-nums whitespace-nowrap ${className}`}>{children}</td>
}
