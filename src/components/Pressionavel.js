import { useState } from 'react';
import { Animated, Easing, Pressable } from 'react-native';

const saida = Easing.bezier(0.23, 1, 0.32, 1);

// Pressable que encolhe um pouco ao toque (feedback de que o app "ouviu")
export default function Pressionavel({
  children,
  style,
  estiloExterno,
  escala = 0.97,
  disabled,
  onPressIn,
  onPressOut,
  ...props
}) {
  const [valor] = useState(() => new Animated.Value(1));

  function animar(para) {
    Animated.timing(valor, {
      toValue: para,
      duration: 140,
      easing: saida,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Pressable
      disabled={disabled}
      style={estiloExterno}
      onPressIn={(e) => {
        animar(escala);
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        animar(1);
        onPressOut?.(e);
      }}
      {...props}
    >
      {(estado) => (
        <Animated.View
          style={[
            typeof style === 'function' ? style(estado) : style,
            { transform: [{ scale: valor }] },
          ]}
        >
          {typeof children === 'function' ? children(estado) : children}
        </Animated.View>
      )}
    </Pressable>
  );
}
