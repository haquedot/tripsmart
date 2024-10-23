import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function CreateTripForm() {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Create a new trip</DialogTitle>
                <DialogDescription>
                    Create a new trip here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <label htmlFor="tripName" className="flex flex-col font-semibold">
                    Trip name
                    <input type="text" id="tripName" className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2" placeholder="Enter trip name" required />
                </label>
                <label htmlFor="destination" className="flex flex-col font-semibold">
                    Destination
                    <input type="text" id="destination" className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2" placeholder="Enter your destination" required />
                </label>
                <label htmlFor="startDate" className="flex flex-col font-semibold">
                    Start date
                    <input type="date" id="startDate" className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2" placeholder="" required />
                </label>
                <label htmlFor="endDate" className="flex flex-col font-semibold">
                    End date
                    <input type="date" id="endDate" className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2" placeholder="" required />
                </label>
            </div>
            <DialogFooter>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
        </>
    )
}
