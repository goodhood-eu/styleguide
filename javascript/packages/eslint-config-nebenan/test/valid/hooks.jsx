const useEffect = () => {};

export const useMagicalFriendship = (layoutRef) => (
  useEffect(() => {
    layoutRef.current.setModal(<article>hey dude</article>);
  }, [])
);
