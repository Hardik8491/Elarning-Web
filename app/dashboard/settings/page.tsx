"use client";

import { Setting } from "@/components/component/setting";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";

const DashboardSettings = () => {
    return (
        <div className='container py-4 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <Heading title='Setting' description='Manage App preferences' />
            </div>
            <Separator className='mb-6' />
            <Setting />
        </div>
    );
};

export default DashboardSettings;
