import { FaCalendar } from "react-icons/fa";
import { FaMessage, FaRankingStar } from "react-icons/fa6";
import { HiReceiptTax } from "react-icons/hi";

export default function Card({ data }) {
  return (
    <div className="bg-[#272e36] rounded-xl overflow-hidden flex flex-col">

      {data.top && (
        <div className="flex gap-2 bg-yellow-500/20 px-5 pt-[0.35rem] pb-[0.2rem] rounded-br-lg mr-auto">
          <FaRankingStar color="yellow" />
          <span className="text-sm text-white/90 font-medium">
            Top #1 bulan ini
          </span>
        </div>
      )}

      <div
        className=" px-5 py-4  text-black/90
      flex gap-10"
      >
        <div className="flex flex-col w-[70%]">
          {/* <div className="text-white/70 flex gap-2 items-center text-[0.8rem] font-semibold mb-4">
            <FaCalendar className="-mt-[0.2rem]"/> {data.date}
          </div> */}

          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[1.2rem] text-white">{data.name}</h2>
            <h4 className="text-[0.9rem] text-white/70">
              {obscureEmail(data.email)}
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-1 justify-center items-end">
          <div className="text-[#2ee070] font-bold text-[1.3rem]">
            Rp{formatToIDR(data.amount)}
          </div>
          <span className="text-[#ff9797] font-medium text-[0.8rem]">
            <div className="flex items-center gap-1">
              <HiReceiptTax className="-mt-[0.1rem]" />
              -Rp{formatToIDR(Math.round(data.amount * 0.05))}
            </div>
          </span>
        </div>
      </div>

      <p className="text-white/80 font-[400] bg-white/5 px-5 py-4 grow leading-[1.6] ">
        <div className="flex gap-3 relative">
          <FaMessage className="shrink-0 mt-[0.43rem] text-xs" />
          {data.message}

          {data.reply && (
            <div className="border-l border-b rounded-bl-md border-white/20 w-[10px] h-[calc(100%+8px)] absolute left-[0.3rem] top-[1.6rem]"></div>
          )}
        </div>

        {data.reply && (
          <div className="bg-white/10 ml-[23px] mt-4 px-3 py-[0.33rem] rounded-md text-[0.95rem]">
            {data.reply}
          </div>
        )}
      </p>
    </div>
  );
}

function formatToIDR(amount) {
  // Convert amount to string
  let str = amount.toString();

  // Add dot as thousand separator
  let result = str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Return the formatted string with 'Rp.' prefix
  return result;
}

function obscureEmail(email) {
  // Split the email into local and domain parts
  if (!email) {
    return "@";
  }

  const [localPart, domainPart] = email.split("@");

  // Check if the email is valid
  if (!domainPart) {
    return "-";
  }

  // Create the obscured local part
  const firstFive = localPart.slice(0, 6);
  const obscuredLocalPart = firstFive + "***";

  // Reassemble the email
  return `${obscuredLocalPart}@${domainPart}`;
}
