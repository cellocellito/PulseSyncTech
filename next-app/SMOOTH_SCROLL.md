# Smooth Scroll com React Lenis

Este projeto usa o [Lenis](https://lenis.darkroom.engineering/) para criar um smooth scrolling premium e suave.

## Configuração

O Lenis está configurado no componente `SmoothScroll` que envolve toda a aplicação no `layout.tsx`.

### Parâmetros de Configuração

```tsx
{
  duration: 1.2,              // Duração do scroll em segundos
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Função de easing
  orientation: 'vertical',    // Orientação do scroll
  gestureOrientation: 'vertical',
  smoothWheel: true,          // Ativa smooth scroll com mouse wheel
  wheelMultiplier: 1,         // Multiplicador de velocidade do wheel
  touchMultiplier: 2,         // Multiplicador de velocidade do touch
  infinite: false,            // Scroll infinito desativado
}
```

## Como Usar

### Scroll Automático

O smooth scroll funciona automaticamente em toda a aplicação. Não é necessário fazer nada especial.

### Scroll Programático

Para fazer scroll programático (ex: ao clicar em um botão), use o hook `useLenis`:

```tsx
import { useLenis } from '@/hooks/useLenis';

function MyComponent() {
  const lenis = useLenis();

  const scrollToSection = () => {
    // Scroll para um elemento por ID
    lenis?.scrollTo('#my-section');
    
    // Ou scroll para uma posição específica
    lenis?.scrollTo(1000);
    
    // Com opções personalizadas
    lenis?.scrollTo('#my-section', {
      offset: -100,      // Offset em pixels
      duration: 2,       // Duração customizada
      easing: (t) => t   // Easing customizado
    });
  };

  return (
    <button onClick={scrollToSection}>
      Scroll to Section
    </button>
  );
}
```

### Links de Navegação

Para links de navegação que devem fazer scroll suave:

```tsx
import { useLenis } from '@/hooks/useLenis';

function Navigation() {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target);
  };

  return (
    <nav>
      <a href="#home" onClick={(e) => handleClick(e, '#home')}>Home</a>
      <a href="#about" onClick={(e) => handleClick(e, '#about')}>About</a>
      <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a>
    </nav>
  );
}
```

## Métodos Disponíveis

- `scrollTo(target, options)` - Scroll para um elemento ou posição
- `start()` - Inicia o Lenis
- `stop()` - Para o Lenis
- `destroy()` - Destroi a instância do Lenis

## Personalização

Para ajustar o comportamento do scroll, edite o arquivo `src/components/SmoothScroll.tsx` e modifique os parâmetros de configuração do Lenis.

### Exemplos de Ajustes

**Scroll mais rápido:**
```tsx
duration: 0.8
```

**Scroll mais lento:**
```tsx
duration: 1.8
```

**Easing linear:**
```tsx
easing: (t) => t
```

**Easing mais suave:**
```tsx
easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
```
