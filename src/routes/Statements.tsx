import styled from 'styled-components';

import StatementsList from '../components/Statements/StatementsList';
import mockStatementsList from '../mock/mockStatementsList';
import StatementsListItem from '../components/Statements/StatementListItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default function Statements() {
    return (
        <Container>
            <div>
                <h1>Statements</h1>
                <button type="button">Add Statement</button>
            </div>
            <StatementsList>
                {mockStatementsList.map((statement) => {
                    const { label, createdOn, expenses, incomes, id } =
                        statement;

                    // TODO: Reduce income & expense amounts to determine unallocated

                    return (
                        <StatementsListItem
                            key={id}
                            statementId={id}
                            label={label}
                            createdOn={createdOn}
                            remainder={0}
                            numOfExpenses={expenses.length ?? 0}
                            numOfIncomes={incomes.length ?? 0}
                        />
                    );
                })}
            </StatementsList>
        </Container>
    );
}
