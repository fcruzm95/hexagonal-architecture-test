# Hexagonal Architecture test project
This project is only for practice using hexagonal architecture (ports and adapters). The main idea is to have most of the logic in the domain, application and infrastructure folders, and then create the ui using react. After getting a React version stable, the next steps are to create the same app in angular and an ios/androd version using expo.

## Next steps
- [] Write documentation for the entities and domain logic.
- [] Create clear and minimal ports
- [] Independent use cases for adapters
- [] UI with dependency injection
- [] Interchangeable repositories (memory -> session storage -> HTTP)
- [] Value Objects for important concepts
- [] Rich entities
- [] Error handling for each layer
- [] Test for each layer

## Learning Structure
1. **Start on the domain layer** (`src/domain/`)
2. **Continue on the application layer** (`src/application/`)
3. **Explore infrastructure** (`src/infrastructure`)
4. **Analyze UI** (`src/ui`)

## Suggested Articles
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) - Alistair Cockburn
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Robert C. Martin
- [DDD & Hexagonal Architecture](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)