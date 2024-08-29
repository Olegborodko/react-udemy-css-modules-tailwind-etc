export default function Input({ invalid }) {
  let labelClasses = "block mb-2 text-xs text-stone-300";

  if (invalid) {
    labelClasses += " text-stone-50"
  } else {
    labelClasses += " text-stone-300"
  }

  return (
    <p>
      <label className={labelClasses}></label>
      <input {...props} />
    </p>
  );
}