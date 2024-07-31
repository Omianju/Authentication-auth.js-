import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CardWrapper } from "./card-wrapper"

export const ErrorCard = () => {
    return (
        <CardWrapper
         headerLabel="Oops! Something went wrong!"
         backButtonHref="/auth/login"
         backButtonLabel="Back to login"
         >
            <div className="w-full flex justify-center items-center text-destructive">
                <ExclamationTriangleIcon className="h-7 w-7" />
            </div>
        </CardWrapper>
    )
}