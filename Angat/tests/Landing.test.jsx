import Header from "../src/frontend/components/header";

test('Click Header Buttons', () => {
    render(<Header />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });