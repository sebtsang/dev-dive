package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("rollback", func(ctx context.Context, args []string) error {
		statePath, rollbackSHA, err := cli.ParseRollbackFlags(args)
		if err != nil {
			return err
		}
		return cli.ExecuteRollback(ctx, statePath, rollbackSHA)
	})
}
