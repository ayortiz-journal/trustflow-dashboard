# Frontend Architecture

## Component Hierarchy & Routing
- `pages/index.tsx`: The marketing landing page.
- `pages/dashboard.tsx`: The protected dashboard listing all escrows tied to the connected wallet.
- `pages/escrow/[id].tsx`: The dynamic detail view. It splits into two major components: the static Escrow details, and the dynamic `ActionPanel`.

## Permission Derivation
We do not use a centralized backend to store user roles. Roles (Buyer, Seller, Arbiter) are derived contextually on the frontend by comparing the user's connected wallet address (`useWallet().address`) against the public keys stored in the Soroban smart contract state (fetched via `@trustflow/sdk`). The `ActionPanel.tsx` uses this derived role to conditionally render the correct action buttons.