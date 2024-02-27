# Nest Study - Memo

### Controllers
- to expose route handlers (API endpoints), that controller must be wired in a module

### Providers
- is `service`
- is injectable
- must be wired in a module

### Modules
- use to group controller and service
- if module A imports module B, then A doesn't need to import controller B or service B, 
- but module B will need to export service B

### Middlewares
- dumb
- doesn't have access to ExecutionContext

### Pipes
- transformation (formatter, parser)
- validation
    - use `class-validator` to decorate type on a DTO 
    - that DTO will then be used in a route handler's request type definition

### Guards
- for authorization
  - Role-based Access Control
  - Claims-based authorization (permissions)
  - CASL
- global guards: can register multiple guards for a token
  - for e.g. APP_GUARD token
  - the order of execution depends on the registration order
    - for e.g. X_Guard is registered in X_Module, Y_Guard is registered in Y_Module
      - then in AppModule, in `imports` array of `@Module`, we put X_Module before Y_Module, then X_Guard will run before Y_Guard

### Execution Context
- `getHandler`: extract metadata of the current processed route handler
- `getClass`: extract metadata of the class (controller) that has a route handler being processed

### Reflection and metadata
- use `Reflector.createDecorator` or `SetMetadata` to create a decorator
- attach the decorator to a route handler or a controller with some data
- in guard, use `Reflector` to `get` the attached data


## Concepts

### Entity vs. Model vs. DTO
- **entity** represents a table in DB
- **DTO** represents request/response type associated with a controller, or API endpoint
- **model** can represent an entity of DTO (not sure)

