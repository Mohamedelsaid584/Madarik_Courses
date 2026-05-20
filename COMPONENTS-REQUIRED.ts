// ============================================
// Required Components to Build
// Educational Platform - 30 Years Experience Team
// ============================================

// 📁 UI Components (Shadcn/UI Based)
// ----------------------------------

// 1. Button Component
// - Variants: default, secondary, outline, ghost, destructive, link
// - Sizes: sm, default, lg, icon
// - States: loading, disabled
// - Loading spinner animation
export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
export type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';

// 2. Input Component
// - Types: text, email, password, number, search, tel
// - States: default, error, disabled, focus
// - Features: icon prefix/suffix, helper text, error message
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// 3. Card Component
// - Features: hover effect, skeleton loading, header/footer slots
// - Variants: default, elevated, outline
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline';
  hover?: boolean;
  loading?: boolean;
  className?: string;
}

// 4. Modal/Dialog Component
// - Features: animations, sizes (sm, md, lg, full), close on escape/overlay
// - Accessibility: focus trap, aria-labels
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

// 5. Table Component
// - Features: sorting, pagination, row selection, responsive
// - Virtual scrolling for large datasets
export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination?: boolean;
  pageSize?: number;
  sortable?: boolean;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
}

// 6. Dropdown/Select Component
// - Features: search, multi-select, clearable, createable
// - Keyboard navigation support
export interface SelectProps {
  options: Option[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  searchable?: boolean;
  multi?: boolean;
  placeholder?: string;
}

// 7. Skeleton Component
// - Variants: text, circular, rectangular
// - Animations: pulse, wave
// - Custom sizes support
export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
  width?: string | number;
  height?: string | number;
  className?: string;
}

// 8. Toast/Notification Component
// - Types: success, error, warning, info
// - Features: auto-dismiss, action button, close button
// - Positions: top-right, top-left, bottom-right, bottom-left
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// 9. Avatar Component
// - Features: image, fallback, status indicator, sizes
// - Grouped avatars support
export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

// 10. Badge Component
// - Variants: default, secondary, destructive, outline
// - Features: dismissible, with icon
export type BadgeVariant = 'default' | 'secondary' | 'destructive' | outline' | 'success';


// 📁 Layout Components
// --------------------

// 11. Sidebar Component
// - Features: collapsible, responsive, icons only mode
// - Active state highlighting
// - Nested navigation support

// 12. Header/Navbar Component
// - Features: search, notifications, user menu, breadcrumb
// - Mobile hamburger menu

// 13. Footer Component
// - Features: links, social media, newsletter signup
// - Responsive: stacked on mobile

// 14. Breadcrumbs Component
// - Auto-generated from route
// - Customizable links


// 📁 Form Components
// -------------------

// 15. Form Field Component
// - Wrapper for label, input, error, helper
// - Validation integration

// 16. Checkbox Component
// - States: checked, unchecked, indeterminate
// - Features: label, description

// 17. Radio Group Component
// - Horizontal/vertical layout

// 18. Toggle/Switch Component
// - With label and description

// 19. Date Picker Component
// - Range selection support

// 20. File Upload Component
// - Drag and drop support
// - Preview, progress, multiple files


// 📁 Feature Components
// ---------------------

// 21. Course Card Component
// - Image, title, instructor, rating, price
// - Progress indicator for enrolled students

// 22. User Profile Card
// - Avatar, name, role, stats

// 23. Stats Card Component
// - Icon, value, label, trend indicator

// 24. Chart Component
// - Line, bar, pie, area charts
// - Interactive tooltips

// 25. Notification Bell Component
// - Badge count, dropdown with list

// 26. Search Component
// - Autocomplete, recent searches
// - Keyboard navigation

// 27. Pagination Component
// - Page numbers, previous/next
// - Items per page selector


// ============================================
// Recommended Libraries
// ============================================

// UI Framework: shadcn/ui (based on Radix UI)
// Icons: lucide-react
// Charts: recharts
// Forms: react-hook-form + zod
// Date: date-fns
// Animation: framer-motion
// State: zustand
// Query: @tanstack/react-query
// Auth: next-auth / auth.js


// ============================================
// Project Structure
// ============================================

/*
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── student/
│   │   │   ├── courses/page.tsx
│   │   │   ├── progress/page.tsx
│   │   │   └── layout.tsx
│   │   ├── teacher/
│   │   │   ├── courses/page.tsx
│   │   │   ├── students/page.tsx
│   │   │   └── layout.tsx
│   │   ├── admin/
│   │   │   ├── users/page.tsx
│   │   │   ├── analytics/page.tsx
│   │   │   └── layout.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── courses/route.ts
│   │   └── users/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn components
│   ├── forms/        # Form components
│   ├── layout/       # Layout components
│   └── features/     # Feature components
├── lib/
│   ├── auth.ts       # Auth utilities
│   ├── db.ts         # Database
│   ├── utils.ts      # General utilities
│   └── constants.ts  # Constants
├── hooks/            # Custom hooks
├── types/            # TypeScript types
└── store/            # State management
*/