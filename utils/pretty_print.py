from colorama import Fore, Style


def colored_print(text, color: str = "white"):
    fore_color = None
    if color == "G":
        fore_color = Fore.GREEN
    elif color == "R":
        fore_color = Fore.RED
    elif color == "B":
        fore_color = Fore.BLUE
    elif color == "Y":
        fore_color = Fore.YELLOW
    elif color == "GRAY":
        fore_color = Fore.LIGHTBLACK_EX

    print(f"{fore_color} {text} {Style.RESET_ALL}")
