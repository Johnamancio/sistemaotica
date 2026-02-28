"use client";

interface Props {
  defaultValue?: string;
}

function formatCPF(value: string) {
  const cpf = value.replace(/\D/g, "");

  return cpf
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export default function CpfInput({ defaultValue }: Props) {
  return (
    <input
      type="text"
      name="cpf"
      required
      maxLength={14}
      defaultValue={defaultValue ? formatCPF(defaultValue) : ""}
      onInput={(e) => {
        const input = e.currentTarget;
        input.value = formatCPF(input.value);
      }}
      className="w-full border p-2 rounded"
      placeholder="000.000.000-00"
    />
  );
}