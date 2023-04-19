import React from 'react'
import {
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import {createVolunteer} from 'src/api/volunteers'
import * as dayjs from 'dayjs'
import BaseModal from 'src/components/common/modal/modal'
import {useStateSetupHandler} from 'src/components/common/use-state-setup-handler';

const NewVolunteerModalContents = (props: {handleClose: any}) => {
    const queryClient = useQueryClient()

    const mutation = useMutation(createVolunteer, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries('volunteers')
        },
    })

    const {state: name, handler: handleNameChange} = useStateSetupHandler('');
    const {state: username, handler: handleUsernameChange} = useStateSetupHandler('');
    const {state: email, handler: handleEmailChange} = useStateSetupHandler('');
    const [phone, setPhone] = React.useState("");
    const [date, setDate] = React.useState<dayjs.Dayjs | null>(null);
    
    const handlePhoneChange = (value: any) => {setPhone(value)}

    const handleCreate = () => {
        mutation.mutate({
            name: name,
            username: username,
            password: 'test',
            email: email,
            phoneNumber: phone,
            date: dayjs(date).toDate()
        })
        props.handleClose()
    }
    
    const handleCancel = () => {
        props.handleClose()
    }

    return (
        <BaseModal
            title={"Create new volunteer"}
            modalActionBarProps={{
                primaryActionProps: {
                    handlePrimary: handleCreate,
                    labelPrimary: "Create"
                },
                secondaryActionProps: [
                    {
                        handle: handleCancel,
                        label: "Cancel"
                    }
                ]
            }}
            modalInputProps={[
                {
                    label: "Name",
                    stateValue: name,
                    stateSetter: handleNameChange
                },
                {
                    label: "Email",
                    stateValue: email,
                    stateSetter: handleEmailChange
                },
                {
                    label: "Username",
                    stateValue: username,
                    stateSetter: handleUsernameChange
                },
                {
                    label: "Phone Number",
                    type: 'phone',
                    stateValue: phone,
                    stateSetter: handlePhoneChange
                },
                {
                    label: "Start Date",
                    type: 'date',
                    stateValue: date,
                    stateSetter: (d: any) => setDate(d)
                },
            ]}
        />
    )
}

export default NewVolunteerModalContents;