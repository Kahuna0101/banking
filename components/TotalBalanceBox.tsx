import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import PlaidLink from "./PlaidLink";

const TotalBalanceBox = ({
  user,
  accounts = [],
  totalCurrentBalance,
  totalBanks,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-6">
          <h2 className="header-2">Bank Accounts: {totalBanks}</h2>

          <div className="flex flex-col gap-2">
            <p className="total-balance-label">Total Current Balance</p>

            <div className="total-balance-amount flex-center gap-2">
              <AnimatedCounter amount={totalCurrentBalance} />
            </div>
          </div>
        </div>
        
        <PlaidLink user={user} variant="ghost" />
      </div>
    </section>
  );
};

export default TotalBalanceBox;
