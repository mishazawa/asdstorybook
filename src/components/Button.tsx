type TButtonProps = {
  title: string;
  onClick: () => any;
};

type TWrappedCbProps<T> = {
  pre?: (v: T) => T;
  post?: (v: T) => T;
};

export function useWrappedCallback(
  cb: (v: any) => any,
  { pre, post }: TWrappedCbProps<any>
) {
  return (v: any) => {
    let asd = pre?.(v) || v;
    asd = cb(asd);
    asd = post?.(asd) || asd;
    return asd;
  };
}

export function Button({ title, onClick }: TButtonProps) {
  const wr = useWrappedCallback(onClick, {
    post() {
      return 2;
    },
  });
  return <button onClick={wr}>{title}</button>;
}
