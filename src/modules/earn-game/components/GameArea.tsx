import { memo, useLayoutEffect, useRef } from "react";

const TREE_WIDTH = 25;
const GAME_ZONE_SIZE = 300;
const BEAVER_SPEED = 6;

export const GameArea = memo(({ incPoint }: { incPoint: () => void }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const treeContainer = useRef<HTMLDivElement | null>(null);
  const treeRef = useRef<HTMLDivElement | null>(null);
  const eatenTreeRef = useRef<HTMLDivElement | null>(null);
  const beaverRef = useRef<HTMLDivElement | null>(null);
  const beaverDirection = useRef<"left" | "right">("left");
  const clickBlocked = useRef(false);

  useLayoutEffect(initValues, []);

  function clickHandler() {
    if (
      !wrapperRef.current ||
      !treeRef.current ||
      !eatenTreeRef.current ||
      !beaverRef.current ||
      clickBlocked.current
    )
      return;

    incPoint();

    const treeMaxHeight = wrapperRef.current.clientHeight;
    const beaverHeight = treeMaxHeight / BEAVER_SPEED;
    const beaverWidth = TREE_WIDTH;

    if (beaverDirection.current === "left") {
      beaverDirection.current = "right";
      beaverRef.current.style.left = -beaverWidth + "px";
    } else {
      beaverDirection.current = "left";
      beaverRef.current.style.left = beaverWidth + "px";
    }

    beaverRef.current.style.top =
      parseFloat(beaverRef.current.style.top) - beaverHeight + "px";
    treeRef.current.style.height =
      parseFloat(beaverRef.current.style.top) + beaverHeight + "px";
    eatenTreeRef.current.style.height =
      treeMaxHeight - parseFloat(treeRef.current.style.height) + "px";

    if (parseFloat(eatenTreeRef.current.style.height) === treeMaxHeight) {
      beaverRef.current.style.left = 0 + "px";

      clickBlocked.current = true;

      setTimeout(() => {
        eatenTreeRef.current!.style.height = 0 + "px";
        beaverRef.current!.style.top = treeMaxHeight - beaverHeight + "px";
        setTimeout(() => {
          initValues();
        }, 200);
      }, 200);
    }
  }

  function initValues() {
    if (
      !wrapperRef.current ||
      !treeRef.current ||
      !eatenTreeRef.current ||
      !beaverRef.current
    )
      return;

    const treeMaxHeight = wrapperRef.current.clientHeight;

    treeRef.current.style.height = treeMaxHeight + "px";
    treeRef.current.style.width = TREE_WIDTH + "px";

    const beaverHeight = treeMaxHeight / BEAVER_SPEED;
    const beaverWidth = TREE_WIDTH;

    eatenTreeRef.current.style.height = 0 + "px";
    eatenTreeRef.current.style.width = TREE_WIDTH / 2 + "px";

    beaverRef.current.style.height = beaverHeight + "px";
    beaverRef.current.style.width = beaverWidth + "px";

    beaverDirection.current =
      beaverDirection.current == "left" ? "right" : "left";

    beaverRef.current.style.top = treeMaxHeight - beaverHeight + "px";

    if (beaverDirection.current === "right") {
      beaverRef.current.style.left = -beaverWidth + "px";
    } else {
      beaverRef.current.style.left = beaverWidth + "px";
    }

    clickBlocked.current = false;
  }

  return (
    <div
      className="bg-primary rounded-full p-6"
      onClick={clickHandler}
      style={{ width: GAME_ZONE_SIZE, height: GAME_ZONE_SIZE }}
    >
      <div
        className="h-full w-full flex flex-col items-center justify-center"
        ref={wrapperRef}
      >
        <div
          className="relative h-full flex flex-col-reverse items-center"
          ref={treeContainer}
        >
          <div className="bg-amber-800 transition-all" ref={eatenTreeRef}></div>
          <div className="bg-amber-800 transition-all" ref={treeRef} />
          <div className="absolute bg-red-500 transition-all" ref={beaverRef} />
        </div>
      </div>
    </div>
  );
});
