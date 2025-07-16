import { zodResolver } from "@hookform/resolvers/zod"
import React, { ChangeEvent, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import { AppButton, ArrowSvg } from "./reusables"

export const MultiPartForm = ({ step, setCurrentStep }: {
    // title: string,
    step: number,
    setCurrentStep: React.Dispatch<SetStateAction<number>>
}) => {

    const [ImagePreview, setImagePreview] = useState('')

    const fundRaiserFormSchema = z.object({
        fundReason: z.string().min(1, "Cannot be empty"),
        fundRaiserTitle: z.string().min(1, "Cannot be empty"),
        fundRaiserDescription: z.string().min(20, "Has to be long enough"),
        mediaProof: z.custom<FileList | null>((value: any) => {
            if (value && value.length > 0) {
                return true;
            } 
            return false;
        }, {
            error: 'Please upload one image'
        })
            .refine((files: any) => !files || files.length === 1, {
                error: 'Please upload one image'
            }) 
            .refine((files: any) => !files || files[0]?.size <= 5 * 1024 * 1024, {
                error: "Max File Size is 5MB"
            })
            .refine((files: any) => !files || ["image/jpg", "image/png"].includes(files?.[0]?.type), {
                error: "Accepted formats are jpeg and png"
            })
            .transform((files) => files ? files[0] : null),
    })

    type FundRaiserFormSchema = z.infer<typeof fundRaiserFormSchema>

    const {
        register, reset, handleSubmit, watch, formState: { errors, touchedFields }
    } = useForm<FundRaiserFormSchema>({
        resolver: zodResolver(fundRaiserFormSchema),
        defaultValues: {
            fundReason: '',
            fundRaiserTitle: '',
            fundRaiserDescription: '',
            mediaProof: null
        }
    })

     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setImagePreview(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    }

    const onSubmit = () => {
        console.log("DOne")
    }

    return (
        <div className="border-2 border-[#e7e7e7] rounded-xl w-[70%] mx-auto py-8 px-10">
            <Progress currentStep={step}/>
            <form action="">

            {step === 0 && (
                <StepZero />
            )}

            {step === 1 && (
                <StepOne />
            )}

            {step === 2 && (
                <StepTwo />
            )}
                
            </form>

            <div className="mt-8">
                <Stepper currentStep={step} setCurrentStep={setCurrentStep}/>
            </div>
        </div>
    )
}

export const Progress = ({ currentStep }: {
    currentStep: number
}) => {
    return (
        <div className="flex justify-center gap-8">
            {
                Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className={`w-32 h-2 ${index <= currentStep? 'bg-[#4E36E9]': 'bg-[#f5f5f5]'} rounded-xl`} />
                ))
            }
            {/* <div className="w-32 h-3 bg-[#f5f5f5] rounded-lg" />
            <div className="w-32 h-3 bg-[#f5f5f5] rounded-lg" /> */}
        </div>
    )
}

const Stepper = ({ currentStep, setCurrentStep }: {
    currentStep: number,
    setCurrentStep: React.Dispatch<SetStateAction<number>>
}) => {
    return (
        <div className="flex justify-between">
            <div role="button" className="cursor-pointer" onClick={() => currentStep !== 0 && setCurrentStep(currentStep - 1)} aria-disabled={currentStep == 0}>
                <ArrowSvg />
            </div>
            <AppButton
                text={currentStep < 2 ? 'Continue': 'Start Fundraiser'} bold bgColor="#4E36E9" textColor="#fff"
                onClick={() => currentStep !== 2 ? setCurrentStep(currentStep + 1) : null}
            />
        </div>
    )
}

export const StepZero = () => {
    return (
        <div>
            Step 0
        </div>
    )
}

export const StepOne = () => {
    return (
        <div>
            Step 1
        </div>
    )
}

export const StepTwo = () => {
    return (
        <div>
            Step 2
        </div>
    )
}