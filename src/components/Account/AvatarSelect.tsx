import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface AvatarSelectProps {
    avatar: number,
    setAvatar: (avatar: number) => void,
    loading?: boolean,
}

/**
 * AvatarSelect component
 */
// @ts-ignore
function AvatarSelect(props: AvatarSelectProps) {
    const { avatar, setAvatar, loading } = props;
    const [open, setOpen] = useState(false);

    // const openAvatarSelect = () => {

    // }

    const selectedAvatarStyle = (i: number) => i+1 === avatar ? 'border bg-gray-700' : null;

    return (
        <div className="">
            <div className="flex items-center gap-2 p-2" onClick={() => !loading && setOpen(!open)} >
                <img className="" width={60} height={60} src={`/avatars/avatar_${avatar}.png`} alt="" />
                {!open ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            { open &&
                <div className="grid grid-cols-5 absolute gap-2 p-2 bg-white border shadow-md rounded-md">
                    {
                        Array(15).fill(0).map((_, i) => (
                            <img className={`rounded-full border-2 border-transparent ${selectedAvatarStyle(i)}`} width={45} height={45} src={`/avatars/avatar_${i + 1}.png`} alt="avatar" key={i} onClick={() => setAvatar(i+1)}/>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default AvatarSelect;