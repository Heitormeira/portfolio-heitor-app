import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

// true quando o celular está com "reduzir movimento" ativo
export default function useReduzirMovimento() {
  const [reduzir, setReduzir] = useState(false);

  useEffect(() => {
    let ativo = true;
    AccessibilityInfo.isReduceMotionEnabled().then((valor) => {
      if (ativo) setReduzir(valor);
    });
    const inscricao = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduzir);
    return () => {
      ativo = false;
      inscricao.remove();
    };
  }, []);

  return reduzir;
}
