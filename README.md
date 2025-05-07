# EShopper Monorepo

A repository shows the complete Monorepo-based structure with file names for both Angular 19 (frontend) and NestJS (backend) applications:

```
eshopper-monorepo/
├── apps/
│   ├── web/                      # Angular 19 Frontend
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   │   ├── header/
│   │   │   │   │   │   ├── header.component.ts
│   │   │   │   │   │   ├── header.component.html
│   │   │   │   │   │   ├── header.component.css
│   │   │   │   │   │   └── header.component.spec.ts
│   │   │   │   │   ├── footer/
│   │   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   │   ├── footer.component.html
│   │   │   │   │   │   └── footer.component.css
│   │   │   │   │   ├── product-card/
│   │   │   │   │   │   ├── product-card.component.ts
│   │   │   │   │   │   ├── product-card.component.html
│   │   │   │   │   │   └── product-card.component.css
│   │   │   │   │   ├── cart-preview/
│   │   │   │   │   │   ├── cart-preview.component.ts
│   │   │   │   │   │   ├── cart-preview.component.html
│   │   │   │   │   │   └── cart-preview.component.css
│   │   │   │   │   ├── category-nav/
│   │   │   │   │   │   ├── category-nav.component.ts
│   │   │   │   │   │   ├── category-nav.component.html
│   │   │   │   │   │   └── category-nav.component.css
│   │   │   │   │   ├── featured-products/
│   │   │   │   │   │   ├── featured-products.component.ts
│   │   │   │   │   │   ├── featured-products.component.html
│   │   │   │   │   │   └── featured-products.component.css
│   │   │   │   │   └── newsletter-subscribe/
│   │   │   │   │       ├── newsletter-subscribe.component.ts
│   │   │   │   │       ├── newsletter-subscribe.component.html
│   │   │   │   │       └── newsletter-subscribe.component.css
│   │   │   │   ├── pages/
│   │   │   │   │   ├── home/
│   │   │   │   │   │   ├── home.component.ts
│   │   │   │   │   │   ├── home.component.html
│   │   │   │   │   │   └── home.component.css
│   │   │   │   │   ├── shop/
│   │   │   │   │   │   ├── shop.component.ts
│   │   │   │   │   │   ├── shop.component.html
│   │   │   │   │   │   └── shop.component.css
│   │   │   │   │   ├── product-detail/
│   │   │   │   │   │   ├── product-detail.component.ts
│   │   │   │   │   │   ├── product-detail.component.html
│   │   │   │   │   │   └── product-detail.component.css
│   │   │   │   │   ├── cart/
│   │   │   │   │   │   ├── cart.component.ts
│   │   │   │   │   │   ├── cart.component.html
│   │   │   │   │   │   └── cart.component.css
│   │   │   │   │   ├── checkout/
│   │   │   │   │   │   ├── checkout.component.ts
│   │   │   │   │   │   ├── checkout.component.html
│   │   │   │   │   │   └── checkout.component.css
│   │   │   │   │   └── account/
│   │   │   │   │       ├── account.component.ts
│   │   │   │   │       ├── account.component.html
│   │   │   │   │       └── account.component.css
│   │   │   │   ├── services/
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   ├── product.service.ts
│   │   │   │   │   └── cart.service.ts
│   │   │   │   ├── interfaces/
│   │   │   │   │   ├── product.interface.ts
│   │   │   │   │   └── user.interface.ts
│   │   │   │   ├── guards/
│   │   │   │   │   └── auth.guard.ts
│   │   │   │   ├── pipes/
│   │   │   │   │   └── currency.pipe.ts
│   │   │   │   ├── app.routes.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.css
│   │   │   │   └── app.module.ts
│   │   │   ├── assets/
│   │   │   │   ├── images/
│   │   │   │   └── styles/
│   │   │   │       ├── tailwind.config.js
│   │   │   │       └── styles.css
│   │   │   ├── environments/
│   │   │   │   ├── environment.ts
│   │   │   │   └── environment.prod.ts
│   │   │   ├── index.html
│   │   │   └── main.ts
│   │   ├── angular.json
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── api/                      # NestJS Backend
│       ├── src/
│       │   ├── auth/
│       │   │   ├── dto/
│       │   │   │   ├── login.dto.ts
│       │   │   │   └── register.dto.ts
│       │   │   ├── strategies/
│       │   │   │   └── jwt.strategy.ts
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.service.ts
│       │   │   └── auth.module.ts
│       │   ├── products/
│       │   │   ├── dto/
│       │   │   │   ├── create-product.dto.ts
│       │   │   │   └── update-product.dto.ts
│       │   │   ├── products.controller.ts
│       │   │   ├── products.service.ts
│       │   │   └── products.module.ts
│       │   ├── users/
│       │   │   ├── users.controller.ts
│       │   │   ├── users.service.ts
│       │   │   └── users.module.ts
│       │   ├── cart/
│       │   │   ├── cart.controller.ts
│       │   │   ├── cart.service.ts
│       │   │   └── cart.module.ts
│       │   ├── prisma/
│       │   │   ├── prisma.service.ts
│       │   │   └── prisma.module.ts
│       │   ├── main.ts
│       │   ├── app.controller.ts
│       │   ├── app.service.ts
│       │   └── app.module.ts
│       ├── prisma/
│       │   └── schema.prisma
│       ├── nest-cli.json
│       ├── tsconfig.json
│       ├── tsconfig.build.json
│       └── package.json
├── libs/                        # Shared libraries
│   ├── shared-interfaces/        # Shared TS interfaces
│   │   ├── src/
│   │   │   ├── product.interface.ts
│   │   │   ├── user.interface.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── shared-utils/             # Shared utilities
│       ├── src/
│       │   ├── constants.ts
│       │   ├── helpers.ts
│       │   └── index.ts
│       └── tsconfig.json
├── package.json
├── nx.json                       # Nx workspace configuration
├── tsconfig.base.json
└── README.md
```

### Key Features of This Structure:

1. **Monorepo Organization**:
   - Clear separation between frontend (`apps/web`) and backend (`apps/api`)
   - Shared libraries in `libs/` for code reuse

2. **Angular Frontend**:
   - Component-based architecture
   - Feature modules for pages
   - Services for business logic
   - Strict TypeScript typing

3. **NestJS Backend**:
   - Modular architecture
   - Feature modules (auth, products, users, cart)
   - Prisma ORM integration
   - DTOs for data validation

4. **Shared Code**:
   - Interfaces in `libs/shared-interfaces`
   - Utility functions in `libs/shared-utils`

5. **Configuration**:
   - Nx workspace configuration (`nx.json`)
   - Base TypeScript configuration (`tsconfig.base.json`)
   - Environment-specific configurations
