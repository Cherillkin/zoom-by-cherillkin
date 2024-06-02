import React, { ReactNode, useState } from "react";
import { Button, Modal } from "antd";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
  isOpen: boolean;
  isClose: () => void;
  className?: string;
  title: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: ReactNode;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  isClose,
  className,
  title,
  buttonText,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onOk={isClose} onCancel={isClose}>
        <div className="flex flex-col gap-6">
          <h1
            className={cn(
              "text-3xl flex justify-center font-bold leading-[42px]",
              className
            )}
          >
            {title}
          </h1>
          {children}
          <Button
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonText || "Meeting Schedule"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default MeetingModal;
