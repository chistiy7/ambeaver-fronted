import MainBgImage from "@/modules/common/assets/main-bg.png";
import { useViewport } from "@telegram-apps/sdk-react";
import { Spinner } from "@telegram-apps/telegram-ui";
import { useLayoutEffect, useRef, useState } from "react";

const SLIDES_STEP_PX = 10;
const ORIGINAL_MAIN_BG_HEIGHT = 3840;
const ORIGINAL_TREE_POSITION_Y = 3190;

export const GameArea = ({
  decPoints,
  clicksToWin,
}: {
  decPoints: () => void;
  clicksToWin: number;
}) => {
  const viewport = useViewport();

  const [initialLoading, setInitialLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const treeContainerRef = useRef<HTMLDivElement | null>(null);
  const treeTrunkRef = useRef<HTMLDivElement | null>(null);
  const beaverRef = useRef<HTMLDivElement | null>(null);
  const backgroundSlidesWrapperRef = useRef<HTMLDivElement | null>(null);
  const mainBgRef = useRef<HTMLImageElement | null>(null);

  const clicksCount = useRef(0);
  const currentSlidesTranslateY = useRef(0);

  const beaverDirection = useRef<"right" | "left">("right");
  const canClick = useRef(true);

  useLayoutEffect(() => {
    viewport?.on("change", initValues);
    return () => viewport?.off("change", initValues);
  }, [viewport]);

  const initValues = () => {
    if (
      !slidesContainerRef.current ||
      !treeContainerRef.current ||
      !treeTrunkRef.current ||
      !beaverRef.current ||
      !backgroundSlidesWrapperRef.current ||
      !mainBgRef.current
    ) {
      return;
    }

    // TODO: верхушку дерева также посчитать
    document.documentElement.style.setProperty("--tree-width", "90px");
    document.documentElement.style.setProperty("--tree-base-width", "142px");

    const currentImageHeight = mainBgRef.current.clientHeight;
    const scale = currentImageHeight / ORIGINAL_MAIN_BG_HEIGHT;
    const yPos = ORIGINAL_TREE_POSITION_Y * scale;
    const initialTreeBottomOffset = currentImageHeight - yPos;

    const slides = backgroundSlidesWrapperRef.current.children;

    canClick.current = true;
    clicksCount.current = 0;

    const totalSlidesHeight = Array.from(slides).reduce(
      (acc, slide) => acc + slide.clientHeight,
      0
    );

    currentSlidesTranslateY.current = -(
      totalSlidesHeight - slidesContainerRef.current.clientHeight
    );

    slidesContainerRef.current.style.transform = `translateY(${currentSlidesTranslateY.current}px)`;

    treeContainerRef.current.style.bottom =
      currentSlidesTranslateY.current + initialTreeBottomOffset + "px";

    treeTrunkRef.current.style.height = clicksToWin * SLIDES_STEP_PX + "px";
    treeTrunkRef.current.style.backgroundPositionY =
      treeTrunkRef.current.style.height;

    beaverDirection.current = "right";
    beaverRef.current.style.bottom = 0 + "px";

    beaverRef.current.classList.remove("to-left-jump");
    beaverRef.current.classList.add("to-right-jump");
  };

  const clickHanlder = () => {
    if (
      !slidesContainerRef.current ||
      !treeTrunkRef.current ||
      !beaverRef.current
    ) {
      return;
    }

    if (!canClick.current) {
      return;
    }

    clicksCount.current++;
    decPoints();

    if (clicksCount.current >= clicksToWin) {
      canClick.current = false;

      let c = 0;
      const intervalId = setInterval(() => {
        if (!slidesContainerRef.current || !beaverRef.current) {
          return;
        }

        c++;

        if (c >= clicksToWin) {
          clearInterval(intervalId);

          setShowLoading(true);

          setTimeout(() => {
            initValues();
            setShowLoading(false);
          }, 500);
        }

        currentSlidesTranslateY.current -= SLIDES_STEP_PX;
        slidesContainerRef.current.style.transform = `translateY(${currentSlidesTranslateY.current}px)`;
        // treeTrunkRef.current.style.backgroundPositionY =
        //   currentSlidesTranslateY.current + "px";

        beaverRef.current.style.bottom =
          parseFloat(beaverRef.current.style.bottom || "0") -
          SLIDES_STEP_PX +
          "px";
      }, 25);
    }

    currentSlidesTranslateY.current += SLIDES_STEP_PX;
    slidesContainerRef.current.style.transform = `translateY(${currentSlidesTranslateY.current}px)`;
    treeTrunkRef.current.style.backgroundPositionY =
      currentSlidesTranslateY.current + "px";

    beaverRef.current.style.bottom =
      parseFloat(beaverRef.current.style.bottom || "0") + SLIDES_STEP_PX + "px";

    if (beaverDirection.current === "left") {
      beaverRef.current.classList.replace("to-left-jump", "to-right-jump");
      beaverDirection.current = "right";
    } else {
      beaverRef.current.classList.replace("to-right-jump", "to-left-jump");
      beaverDirection.current = "left";
    }

    treeTrunkRef.current.style.backgroundPositionY =
      treeTrunkRef.current.style.height;
  };

  const onImageLoad = () => {
    setInitialLoading(false);
    initValues();
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div ref={slidesContainerRef} className="absolute inset-0 h-full w-full">
        <div ref={treeContainerRef} className="tree-container">
          <div className="tree-crown"></div>
          <div ref={treeTrunkRef} className="tree-trunk">
            <div ref={beaverRef} className="beaver"></div>
          </div>
          <div className="tree-base"></div>
        </div>

        <div ref={backgroundSlidesWrapperRef} className="bg-slides">
          <div className="slide slide-3"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-3"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-3"></div>
          <div className="slide slide-2"></div>

          <div className="slide slide-3"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-1"></div>

          <div className="slide slide-3"></div>
          <div className="slide slide-2"></div>
          <img ref={mainBgRef} src={MainBgImage} onLoad={onImageLoad} />
        </div>
      </div>

      <div
        className="absolute left-1/2 top-1/2 z-10 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary p-6 opacity-40 xxs:h-[240px] xxs:w-[240px] xs:h-[300px] xs:w-[300px]"
        onClick={clickHanlder}
      >
        {showLoading && (
          <div className="flex h-full w-full items-center justify-center">
            tree update..
          </div>
        )}
      </div>

      {initialLoading && (
        <div className="absolute inset-0 z-30 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50">
          <Spinner size="l" />
        </div>
      )}
    </div>
  );
};
