import LangButton from "./LangButton";
import LangList from "./LangList";

async function LangSelector({ selected }) {
  const LanguageList = <LangList />;
  return (
    <LangButton localeList={LanguageList}>
    </LangButton>
  );
}

export default LangSelector;
