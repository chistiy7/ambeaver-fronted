import { useTasksControllerFindAll } from "@/modules/api/default/default";
import { useReferralControllerGetReferralLink } from "@/modules/api/referral/referral";
import { Spinner } from "@telegram-apps/telegram-ui";
import { useEffect } from "react";
import { TaskItem } from "../components/TaskItem";

export const tasksParams = {
  page: 0,
  perPage: 20,
};

export const TasksPage = () => {
  const { data: linkData, isLoading: isReferralLinkLoading } =
    useReferralControllerGetReferralLink();

  const {
    data: tasksData,
    isLoading: isTasksLoading,
    refetch: refetchTasks,
  } = useTasksControllerFindAll(tasksParams);

  const tasks =
    tasksData?.data.data
      ?.map((task) => {
        if (task.status === "FINISHED") {
          return {
            ...task,
            priority: 10,
          };
        }

        if (task.status === "READY_FOR_CLAIM") {
          return {
            ...task,
            priority: 5,
          };
        }

        return {
          ...task,
          priority: 0,
        };
      })
      .sort((a, b) => a.priority - b.priority) || [];

  useEffect(() => {
    refetchTasks();
  }, []);

  if (isTasksLoading || isReferralLinkLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Spinner className="text-[#353B35]" size="l" />
      </div>
    );
  }

  return (
    <div className="text-[#353B35]">
      <h1 className="text-3xl font-extrabold">Ambeaver socials</h1>
      <p className="mt-6">
        Join the Ambeaver community, stay up to date with new and upcoming
        updates, find your tribe on Ambeaver
      </p>

      <ul className="mt-1 w-full">
        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            inviteLink={linkData?.data.link || ""}
            task={task}
            refetchTasks={refetchTasks}
          />
        ))}
      </ul>
    </div>
  );
};
